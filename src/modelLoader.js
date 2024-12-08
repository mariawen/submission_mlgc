const tf = require("@tensorflow/tfjs-node");
const path = require("path");

// Ubah path sesuai dengan lokasi model di folder lokal Anda
const LOCAL_MODEL_PATH = path.join(__dirname, "model\model.json");

async function loadModel() {
  try {
    const model = await tf.loadLayersModel(`file://${LOCAL_MODEL_PATH}`);
    return model;
  } catch (error) {
    console.error("Error loading model from local storage:", error);
    throw error;
  }
}

async function predictImage(imageBuffer, model) {
  const tensor = tf.node.decodeImage(imageBuffer, 3)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .div(255)
    .expandDims();

  const prediction = model.predict(tensor);
  return prediction.dataSync()[0];
}

module.exports = { loadModel, predictImage };
