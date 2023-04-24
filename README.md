# Vite Node Server

Bu uygulama ortam değişkenlerinin API isteği yaparken istemci ve sunucu ortamındaki farkını göstermek için hazırlanmış bir havuzdur.

# Kurulum

1. Havuzu klonlayın ve klasör dizini değiştirin.

```bash
git clone https://github.com/biskendr/vite-node-server
cd vite-node-server
```

2. .env.sample dosyasını .env ismiyle kopyasını oluşturun ve ilgili değişkenleri tanımlayın.

```bash
cp .env.sample .env
```

3. Bağımlılıkları yükleyin

```bash
npm install
```

4. Sunucuyu başlatmak için

```bash
node server.js
```

5. Uygulamayı başlatmak için

```bash
npm run dev
```

<br/>
<hr/>
<br/>

Uygulama sunucuda API isteği gerçekleştirecek şekilde kurulacaktır.

Eğer istemci tarafında nasıl çalıştığını görmek istiyorsanız projenin önceki haline gitmek için:

```bash
git checkout aafb4d8
```

Son haline geri gelmek için:

```bash
git checkout 1ff9b50
```

komutlarını kullanabilirsiniz.
