function show(content) {
  window.document.getElementById('app').innerText = 'hello,' + content
}

// 使用commonJs规范导出
module.exports = show