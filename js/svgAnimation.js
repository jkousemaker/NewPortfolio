       //Svg picture animation
        anime({
            targets: '.morph',
            d: [
                { value: 'M 237.128 313.535 C 199.346 314.466 131.194 297.093 100.021 260.377 C 68.849 223.662 74.656 167.605 109.251 134.962 C 143.846 102.319 207.228 93.092 242.107 120.189 C 276.986 147.287 283.361 210.709 282.842 252.039 C 282.323 293.368 274.911 312.603 237.128 313.535', delay: 1000 },
                { value: 'M 241.619 290.181 C 207.729 320.254 147.96 308.67 114.792 276.146 C 81.623 243.623 75.055 190.16 78.013 155.821 C 80.971 121.481 93.456 106.266 130.63 102.924 C 167.804 99.582 229.668 108.115 256.594 148.246 C 283.521 188.378 275.509 260.108 241.619 290.181', delay: 1000 }
            ],
            fill: 'rgb(24 62 106)',
            easing: 'easeInOutCubic',
            duration: 5000,
            loop: true,
            direction: 'alternate',
            delay: 1000,
            autoplay: true
            });