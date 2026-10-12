// 옛 주소에 설치된 앱의 오프라인 저장을 끝낸다. 새로 받은 이 파일이 옛 것을 대신한 뒤 스스로 물러나고,
// 열려 있는 화면을 다시 불러 index.html(새 주소로 넘기기)을 받게 한다. 저장된 진도(localStorage)는 건드리지 않는다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    self.registration.unregister()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((list) => Promise.all(list.map((c) => c.navigate(c.url)))),
  );
});
