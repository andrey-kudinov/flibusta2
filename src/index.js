import NProgress from 'nprogress'

NProgress.start()

setTimeout(function () {
  NProgress.set(0.4)
}, 1000)

setTimeout(function () {
  NProgress.set(0.7)
}, 2000)

setTimeout(function () {
  NProgress.done()
}, 3000)

console.log('hello world')
