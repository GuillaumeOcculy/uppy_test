# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@uppy/core", to: "https://cdn.jsdelivr.net/npm/@uppy/core@2.1.8/lib/index.js"
pin "@uppy/dashboard", to: "https://cdn.jsdelivr.net/npm/@uppy/dashboard@2.1.4/lib/index.js"
pin "@uppy/tus", to: "https://cdn.jsdelivr.net/npm/@uppy/tus@2.2.2/lib/index.js"
