import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column()
  productId: number;

  @JoinTable()
  @ManyToOne(() => Product, (product) => product.reviews)
  product: Product;
}
