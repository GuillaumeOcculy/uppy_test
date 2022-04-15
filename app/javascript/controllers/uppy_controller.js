import { Controller } from "@hotwired/stimulus"
import 'uppy'

export default class extends Controller {
  connect() {
    var uppy = new Uppy.Core()
        .use(Uppy.Dashboard, {
          inline: true,
          target: '#drag-drop-area'
        })
        .use(Uppy.Tus, {endpoint: 'https://tusd.tusdemo.net/files/'})

      uppy.on('complete', (result) => {
        console.log('Upload complete! We’ve uploaded these files:', result.successful)
      })
  }

  initialize() {
    console.log('initialize uppy')
  }
}
