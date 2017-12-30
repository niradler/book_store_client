import config from './config'
import axios from 'axios'
import moment from 'moment'
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
    update(id,book) {
        if(book.publication_date){//format date
            book.publication_date=moment(book.publication_date,'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        return axios({
            method: this.config.actions['update'].method,
            url: this.config.url.concat(this.config.actions['update'].path).replace(':id',id),
            data: book
          });
    }
    delete(id) {
        return axios({
            method: this.config.actions['delete'].method,
            url: this.config.url.concat(this.config.actions['delete'].path).replace(':id',id),
          });
    }
    add(book) {
        return axios({
            method: this.config.actions['add'].method,
            url: this.config.url.concat(this.config.actions['add'].path),
            data: book
          });
    }
    search(q) {
        return axios({
            method: this.config.actions['search'].method,
            url: this.config.url.concat(this.config.actions['search'].path),
            params: {q}
          });
    }
}

const server = new Server(config());
export default server