import { Controller } from "@hotwired/stimulus"
// import Uppy from '@uppy/core' Failed to register controller: uppy (controllers/uppy_controller) SyntaxError: The requested module '@uppy/core' does not provide an export named 'default' (at uppy_controller-608c0f44a179e49c5b570a3a23b47d5744eb4e948261a13c55385dce4e604fff.js:2:8)
// import {Uppy} from '@uppy/core' Failed to register controller: uppy (controllers/uppy_controller) SyntaxError: The requested module '@uppy/core' does not provide an export named 'Uppy' (at uppy_controller-eaf00820aa439d9ac82797b691b39e30462ea18528d6c843f3409e78b9574a29.js:3:9)

export default class extends Controller {
  connect() {
    console.log('connect uppy')
  }

  initialize() {
    console.log('initialize uppy')
  }
}
