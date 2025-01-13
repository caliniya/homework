// 等待页面加载完毕后执行
document.addEventListener('DOMContentLoaded', function() {
    // 模组版本数据
    const versions = [
        { version: '作业', description: '作业', exists: false },

        // 可以根据需要添加更多版本数据
    ];

    // 获取版本列表的 ul 元素
    const versionList = document.getElementById('version-list');

    // 遍历版本数据，创建列表项并添加到 ul 元素中
    versions.forEach(function(ver) {
        const li = document.createElement('li');
        li.textContent = `版本 ${ver.version}: ${ver.description}`;
        
        // 如果文件存在，则创建下载链接
        if (ver.exists) {
            const downloadLink = document.createElement('a');
            downloadLink.href = `文件/作业v${ver.version}.zip`;
            downloadLink.textContent = '下载';
            downloadLink.setAttribute('download', ''); // 添加 download 属性使其成为下载链接
            li.appendChild(downloadLink);
        } else {
            // 文件不存在时显示提示信息
            const errorText = document.createElement('span');
            errorText.textContent = ' (文件不存在)';
            errorText.style.color = 'red';
            li.appendChild(errorText);
        }
        
        // 将 li 元素添加到版本列表中
        versionList.appendChild(li);
    });
});
