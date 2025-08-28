document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const videoId = container.dataset.videoId;

        container.addEventListener('click', () => {
            videoContainers.forEach(otherContainer => {
                if (otherContainer !== container && otherContainer.querySelector('iframe')) {
                    otherContainer.innerHTML = `
                        <img src="assets/img/ventures.png">
                        <div class="play-button"></div>
                    `;
                }
            });

            const iframe = document.createElement('iframe');

            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('title', 'YouTube video player');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            iframe.setAttribute('allowfullscreen', '');

            container.innerHTML = '';
            container.appendChild(iframe);
        });
    });
});
