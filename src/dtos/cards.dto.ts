import { IsBoolean, IsIn, IsNumberString, IsString } from 'class-validator';
import { IsObjectId } from '@utils/custom-validation';
import { typeOfDeck } from '@config';

export class CreateDeckDto {
  @IsIn([typeOfDeck.FULL, typeOfDeck.SHORT])
  @IsString()
  public type: string;

  @IsBoolean()
  public shuffled: Boolean;
}

export class GetDeckDto {
  @IsObjectId()
  public id: String;
}

export class DrawDeckDto {
  @IsObjectId()
  public id: String;

  @IsNumberString()
  public count: Number;
}
