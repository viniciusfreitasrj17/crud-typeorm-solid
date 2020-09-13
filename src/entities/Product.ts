import { Entity, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Global from './Global';

@Entity('products')
export default class Product extends Global {
  @Column()
  @IsNotEmpty({ message: 'Preencha este campo' })
  name: string;

  @Column()
  @IsNotEmpty({ message: 'Preencha este campo' })
  amount: number;

  @Column()
  @IsNotEmpty({ message: 'Preencha este campo' })
  price: string;
}
