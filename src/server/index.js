import config from './config'
import axios from 'axios'

class Server {
    constructor(config) {
        this.config = config
    }
  
    get(id) {
        return axios({
            method: this.config.actions['get'].method,
            url: this.config.url.concat(this.config.actions['get'].path).replace(':id',id),
          });
    }
    getAll() {
        return axios({
            method: this.config.actions['getAll'].method,
            url: this.config.url.concat(this.config.actions['getAll'].path),
          });
    }
    update(book) {
        return axios({
            method: this.config.actions['update'].method,
            url: this.config.url.concat(this.config.actions['update'].path),
            data: book
          });
    }
    delete(id) {
        return axios({
            method: this.config.actions['update'].method,
            url: this.config.url.concat(this.config.actions['update'].path).replace(':id',id),
          });
    }
    add(book) {
        return axios({
            method: this.config.actions['add'].method,
            url: this.config.url.concat(this.config.actions['add'].path),
            data: book
          });
    }
}

const server = new Server(config());
export default server