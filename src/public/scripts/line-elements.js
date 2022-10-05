let lineElements = {
    // * Play Icon * //
    createPlayIcon: (width, height) => {
        let container = document.createElement("div");
        container.className = "line-container play-icon";
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${width+5} ${height+5}`);
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        svg.className = "line-svg";

        const rc = rough.svg(svg);

        let path

        function refresh() {
            if (path) {
                svg.removeChild(path);
            }

            path = rc.path("M2.87902 47C2.87902 45.5659 2.291 44.2333 2.09514 42.8227C1.95414 41.8072 1.99018 40.6065 2.07253 39.5897C2.24575 37.451 2.6858 35.3426 2.73581 33.1927C2.78354 31.1413 2.67382 28.9072 3.18051 26.8992C4.15391 23.0415 3.69305 18.8353 3.69305 14.8704C3.69305 13.255 3.69305 11.6397 3.69305 10.0244C3.69305 9.2018 3.69305 8.3792 3.69305 7.5566C3.69305 6.79802 4.00566 6.12891 4.08499 5.38521C4.13884 4.88049 4.10007 4.35582 4.10007 3.84801C4.10007 3.33155 3.76509 1.83799 4.59753 2.01439C7.12527 2.55004 9.72703 3.98443 11.9464 5.17841C13.8166 6.18451 15.5924 7.29722 17.5015 8.25971C19.1021 9.0667 20.7527 9.93103 22.3178 10.8171C23.8405 11.6792 25.5016 12.2805 27.1116 12.9816C28.253 13.4787 29.4405 13.8629 30.5863 14.3534C31.7811 14.8649 32.8554 15.5676 34.0534 16.0767C35.7276 16.7881 37.3581 17.6363 38.9527 18.4894C40.0181 19.0593 41.2254 19.5681 42.2239 20.2265C42.8392 20.6321 43.4289 21.0915 44.0103 21.5362C44.2093 21.6884 44.8194 22.0172 44.9373 22.26C45.2191 22.8397 46.1103 23.298 46.7689 23.4318C47.2884 23.5374 46.7933 24.4143 46.6257 24.5968C46.1937 25.0672 45.4929 25.3715 44.9373 25.7135C41.6472 27.7388 37.6778 28.7877 34.1137 30.3182C32.7017 30.9246 31.2429 31.4595 29.9079 32.207C29.1347 32.64 28.5654 33.3449 27.8427 33.8476C26.3524 34.8842 24.6941 35.6186 23.1545 36.5773C22.4661 37.006 21.7185 37.6242 20.9234 37.8319C20.6417 37.9055 20.3174 38.2096 20.0491 38.3282C19.475 38.5821 18.7544 38.7845 18.2703 39.183C17.5595 39.7681 16.4602 40.0488 15.602 40.3962C14.3168 40.9167 12.8901 41.26 11.5696 41.7128C8.54324 42.7507 5.69285 44.3745 3.01469 46.0074", 
            {
                fill: "rgb(140, 169, 231)",
                fillStyle: "solid",
                fillWeight: 5,
                stroke: "rgb(68, 120, 233)",
                strokeWidth: 5,
                roughness: 1
            });

            svg.appendChild(path);
        }

        container.appendChild(svg);

        refresh();

        return {
            container: container,
            svg: svg,
            refresh: refresh
        }
    },
    // * Logo * //
    createLogo: (width, height) => {
        let logoPaths = [
            "M8 32.8296C22.1966 27.6683 36.851 24.2985 51.2367 19.8333C56.1618 18.3047 61.1114 16.6008 65.9202 14.7086C67.6815 14.0156 69.1932 13.081 70.7418 12",
            "M31.8288 26.4205C32.3409 29.1843 33.1335 31.866 33.8206 34.5844C36.1008 43.6069 38.0384 52.7811 39.9903 61.8867C42.4347 73.2899 44.6561 84.918 45.1034 96.6281C45.3007 101.793 44.8488 106.905 44.2897 112.028",
            "M87.1378 111.112C87.1378 110.609 87.0845 110.228 86.9677 109.739C85.9134 105.323 85.4925 100.788 85.2188 96.2593C84.7782 88.9672 84.4692 81.565 83.227 74.3615C82.2804 68.8718 80.9988 63.7222 79.2677 58.466",
            "M77.0816 36.263C77.0233 35.7747 74.9434 36.0128 74.5068 36.0341C72.5179 36.131 71.4346 40.0256 70.9726 41.4768C70.4465 43.1293 69.9104 44.9982 70.0981 46.7668C70.253 48.2263 72.462 48.3945 73.4623 48.3945C76.3387 48.3945 79.7128 47.7765 81.6725 45.4316C82.8122 44.0677 82.7655 42.9875 82.7655 41.2097C82.7655 39.5532 80.4465 37.6663 79.0491 37.1786",
            "M137.419 37.4075C135.868 35.8737 133.236 35.4799 131.613 37.026C123.667 44.5959 118.702 55.3913 117.282 66.4646C116.854 69.7988 116.86 73.1919 116.869 76.5488C116.881 80.9879 116.919 85.4613 117.537 89.8629C118.333 95.53 119.821 103.061 123.828 107.297C126.138 109.739 130.179 109.882 133.253 109.573C142.649 108.631 150.765 102.489 158.624 97.6072",
            "M166.276 65.7906C165.859 65.7362 168.439 65.0174 168.656 64.9768C172.32 64.2917 176.123 64.2367 179.83 63.9595",
            "M186.91 20.7153C187.79 20.7153 188.679 20.8773 189.546 21.0078C198.396 22.3412 207.116 24.2176 215.816 26.3869C229.347 29.7612 242.769 33.6338 256.356 36.7635C260.339 37.681 264.576 38.2673 268.453 39.4848",
            "M226.042 29.4134C224.537 31.6191 224.233 34.9447 223.977 37.552C223.166 45.8127 222.83 54.1586 222.447 62.4508C221.705 78.5152 221.363 94.6015 220.795 110.672",
            "M354.624 71.0581C354.624 64.6072 350.632 58.0109 345.247 54.7951C342.512 53.1618 339.767 52.959 336.668 52.959C334.867 52.959 333.831 53.6746 332.371 54.766C329.313 57.0523 326.32 59.4952 323.749 62.3729C317.438 69.4383 313.251 78.311 313.672 88.1809C314.06 97.2649 318.667 104.226 326.493 108.131C334.687 112.22 345.833 108.768 353.827 105.843C360.435 103.425 367.52 100.697 370.496 93.6165",
            "M376.418 34.3569C393.497 30.9861 409.427 23.8798 423.795 13.2745",
            "M413.872 110.005C416.932 95.0046 415.284 78.9654 412.251 64.1346C409.616 51.2531 405.524 38.7443 403.659 25.6759",
            "M448.552 53.6582C451.269 52.743 453.535 52.6223 455.917 53.9246C459.043 55.5264 465.82 60.7104 467.615 63.6489C471.588 70.1512 476.068 76.9845 476.887 84.7847C477.679 92.3142 476.293 98.8578 471.017 104.477C464.777 111.123 457.274 110.551 448.985 109.007C441.582 107.627 437.28 103.741 435.034 96.3739C432.759 88.912 432.548 79.3413 435.207 71.9522C437.524 65.5152 442.544 57.2283 448.552 53.6582Z",
            "M379.971 64.4062C380.486 64.3232 380.988 64.0542 381.482 63.8909C383.198 63.3235 384.953 62.832 386.723 62.4897C389.734 61.9072 392.768 61.7313 395.823 61.6399",
            "M265.646 68.572C265.646 66.3315 265.587 64.191 265.936 61.9926C266.588 57.8985 268.315 54.0262 271.38 51.2693C272.52 50.2446 273.824 49.6964 275.096 48.9014C275.789 48.4681 276.534 48.0378 277.357 48.0219C277.818 48.0129 278.379 47.9457 278.827 48.0895C279.489 48.302 280.754 48.7404 281.283 49.2566C282.04 49.997 283.01 50.4423 283.803 51.1424C284.702 51.9374 285.531 52.8589 286.363 53.7302C288.464 55.9305 290.466 58.7377 291.847 61.4852C292.86 63.4992 293.435 65.422 293.996 67.6079C294.311 68.8358 294.286 70.0526 294.286 71.312C294.286 73.4178 294.286 75.5235 294.286 77.6293C294.286 83.681 293.705 89.7378 293.705 95.7862C293.705 98.6559 293.269 101.483 293.269 104.344C293.269 104.846 293.104 105.805 293.382 106.205C293.92 106.979 294.25 107.918 294.949 108.615C296.004 109.668 296.547 110.565 297.969 111.102C298.828 111.425 300.525 111.277 301.265 110.89",
            "M294.268 73.0728C294.223 73.6347 293.842 73.9791 293.51 74.3915C293.113 74.8854 292.708 75.4275 292.217 75.8269C291.668 76.2745 291.089 76.8667 290.635 77.4257C289.379 78.969 287.861 79.8694 286.232 80.9266C285.311 81.5242 284.291 81.8255 283.267 82.1869C281.971 82.6449 280.644 83.0469 279.311 83.3656C277.492 83.8003 275.804 84.8509 273.994 85.3611C272.344 85.8263 270.78 86.6175 269.18 87.2283C267.552 87.8493 265.63 88.5055 264.376 89.819C263.122 91.1313 262.178 92.9634 261.433 94.6386C260.993 95.6293 260.603 96.7865 260.441 97.8711C260.255 99.1232 260.345 100.457 260.363 101.722C260.378 102.723 260.88 104.01 261.478 104.78C263.578 107.482 266.595 108.887 269.91 108.887C275.033 108.887 280.457 109.49 285.335 107.575C286.666 107.052 287.958 106.268 289.197 105.527C289.851 105.135 290.438 104.212 290.807 103.525C291.254 102.693 291.646 101.712 292.206 100.958C292.607 100.418 292.602 99.6548 292.914 99.0673C293.25 98.4337 293.312 97.4529 293.46 96.7567C293.561 96.2824 294.08 88.1184 294.08 87.6079",
            "M495.518 88.6388C498.067 91.0807 507.973 88.3644 511.232 87.8519C515.962 87.1081 519.882 84.8288 523.771 82.0163C527.957 78.9892 530.126 74.5824 530.126 69.2255C530.126 68.1151 530.154 67.3885 529.481 66.491C528.646 65.3786 527.545 64.8975 526.455 64.1627C523.873 62.4226 521.381 61.8371 518.412 61.6858C516.507 61.5887 514.58 61.6759 512.673 61.6759C509.918 61.6759 507.042 62.8488 504.535 63.9943C503.467 64.4827 502.413 64.8165 501.443 65.52C500.863 65.9407 500.43 66.4948 499.878 66.9368C499.282 67.4144 498.606 67.6716 498.067 68.2347C497.271 69.0655 496.892 70.2526 496.492 71.3259C495.946 72.7933 495.494 74.5334 495.259 76.0816C493.376 88.4725 498.081 105.045 511.014 108.569C515.337 109.747 519.491 110.005 523.961 110.005C525.597 110.005 527.119 110.009 528.722 109.688C529.796 109.473 531.064 109.634 532.089 109.193C533.88 108.423 535.848 108.167 537.714 107.687C538.934 107.373 539.975 106.823 541.053 106.26"
        ]

        let container = document.createElement("div");
        container.className = "line-container";
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${width+20} ${height+20}`);
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        svg.className = "line-element";

        const rc = rough.svg(svg);

        function refresh() {
            while (svg.firstChild) {
                svg.removeChild(svg.firstChild);
            }

            for (let i = 0; i < logoPaths.length; i++) {
                let path = rc.path(logoPaths[i], {
                    fill: "none",
                    stroke: "rgb(68, 120, 233)",
                    strokeWidth: 5,
                    roughness: 1
                });
                svg.appendChild(path);
            }
        }

        container.appendChild(svg);

        refresh();

        return {
            container: container,
            svg: svg,
            refresh: refresh
        };
    },

    // * Button Element * //
    createButton: (width, height) => {
        let container = document.createElement("div");
        container.className = "line-container";
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${width+20} ${height+20}`);
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        svg.className = "line-element";

        const rc = rough.svg(svg);
        let node = rc.rectangle(0+10, 0+10, width, height, {bowing: 3, strokeWidth: 3, stroke: "rgb(68, 120, 233)"});
        svg.appendChild(node);

        let button = document.createElement("button");
        button.className = "line-button";
        button.style.width = `${width}px`;
        button.style.height = `${height}px`;
        button.style.border = "none";
        button.style.outline = "none";
        button.style.background = "none";
        button.style.cursor = "pointer";

        container.appendChild(button);

        container.appendChild(svg);

        return {
            container: container,
            svg: svg,
            button: button,
            refresh: () => {
                if (node) {
                    svg.removeChild(node);
                }

                node = rc.rectangle(0+10, 0+10, width, height, {bowing: 3, strokeWidth: 3, stroke: "rgb(68, 120, 233)"});
                svg.appendChild(node);
            }
        };
    },

    createInput: (width, height) => {
        let container = document.createElement("div");
        container.className = "line-container";
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        svg.className = "line-element";

        const rc = rough.svg(svg);
        let node = rc.rectangle(10, 10, width-20, height-20, {bowing: 3, strokeWidth: 3, stroke: "rgb(68, 120, 233)"});
        svg.appendChild(node);

        let input = document.createElement("input");
        input.className = "line-input";
        input.style.width = `${width-25}px`;
        input.style.height = `${height-25}px`;
        input.style.border = "none";
        input.style.outline = "none";
        input.style.background = "none";
        input.style.cursor = "pointer";

        container.appendChild(input);

        container.appendChild(svg);

        return {
            container: container,
            svg: svg,
            input: input,
            refresh: () => {
                if (node) {
                    svg.removeChild(node);
                }

                node = rc.rectangle(10, 10, width-20, height-20, {bowing: 3, strokeWidth: 3, stroke: "rgb(68, 120, 233)"});
                svg.appendChild(node);
            }
        };
    }
}

window.onload = () => {
    console.log("Loaded");

    let inputData = lineElements.createInput(250, 75);
    document.getElementById("lobby-join").appendChild(inputData.container);
    inputData.input.type = "number";
    inputData.input.placeholder = "Lobby Code";

    let buttonData = lineElements.createButton(75, 75);
    document.getElementById("lobby-join").appendChild(buttonData.container);

    let playIconData = lineElements.createPlayIcon(45, 45);
    buttonData.container.appendChild(playIconData.container);

    let logoData = lineElements.createLogo(550, 125);
    document.getElementById("main-entry").prepend(logoData.container);

    setInterval(() => {
        inputData.refresh();
        buttonData.refresh();
        playIconData.refresh();
        logoData.refresh();
    }, 400);
}