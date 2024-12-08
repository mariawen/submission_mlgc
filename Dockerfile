# Gunakan image resmi Node.js
FROM node:18-slim

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Expose port aplikasi
EXPOSE 8080

# Jalankan aplikasi Node.js
CMD ["node", "index.js"]
