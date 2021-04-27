import { Base } from './Base';

// Inheritance: https://blogs.msdn.microsoft.com/premier_developer/2018/06/17/angular-how-to-simplify-components-with-typescript-inheritance/
export default class Status extends Base {

  itemApi = 'api/Status';

  async componentDidMount() {   
    await this.getItems(this.itemApi);
  }

}