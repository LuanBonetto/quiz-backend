import { v4 as uuidv4 } from 'uuid';
import { UUIDGateway } from '../gateways/UUIDGateway';

export class UUIDGenerator implements UUIDGateway {
  public generateUUID():string {
    return uuidv4();
  }
}
