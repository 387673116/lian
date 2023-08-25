        function getRandomImages() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var imageContainer = document.getElementById("imageContainer");
                    imageContainer.innerHTML = ""; // 清空容器

                    var lines = xhr.responseText.split("\n");
                    var selectedLines = getRandomElements(lines, 9); // 获取三行随机内容

                    for (var i = 0; i < selectedLines.length; i++) {
                        var imageUrl = selectedLines[i].trim();

                        if (imageUrl !== "") {
                            var img = document.createElement("img");
                            img.src = imageUrl;
                            img.onclick = function() {
                                location.reload(); // 点击图片刷新页面
                            };

                            imageContainer.appendChild(img);
                        }
                    }
                }
            };

            xhr.open("GET", "https://cdn.jsdelivr.net/gh/387673116/lian/txt/vmgirls.txt", true); // 替换为你的文本文件路径
            xhr.send();
        }

        function getRandomElements(array, count) {
            var shuffled = array.slice(0);
            var i = array.length;
            var min = i - count;
            var temp;
            var index;

            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }

            return shuffled.slice(min);
        }

        getRandomImages();
