
      function runSpeedTest() {
        // Check if the browser supports the Network Information API
        if (navigator.connection && navigator.connection.downlinkMax) {
          // Get the maximum downlink speed reported by the browser
          var maxSpeedMbps = navigator.connection.downlinkMax;

          // Start the speed test by fetching a large file
          var startTime = performance.now();
          var fileSizeMB = 10; // Size of the file to fetch in megabytes

          fetch('https://example.com/large-file.bin')
            .then(function (response) {
              var endTime = performance.now();
              var durationSeconds = (endTime - startTime) / 1000;

              // Calculate the average download speed
              var speedMbps = (fileSizeMB / durationSeconds).toFixed(2);

              // Display the results
              var resultElement = document.getElementById('result');
              resultElement.innerHTML =
                'Max Speed: ' + maxSpeedMbps + ' Mbps<br>' +
                'Download Speed: ' + speedMbps + ' Mbps';
            })
            .catch(function (error) {
              console.log('Error:', error);
            });
        } else {
          console.log('Network Information API not supported.');
        }
      }

  