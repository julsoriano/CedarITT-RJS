import { Base } from './Base';

// Inheritance: https://blogs.msdn.microsoft.com/premier_developer/2018/06/17/angular-how-to-simplify-components-with-typescript-inheritance/
export default class Location extends Base {

  itemApi = 'api/Location';

  async componentDidMount() {   
    await this.getItems(this.itemApi);
  }

}