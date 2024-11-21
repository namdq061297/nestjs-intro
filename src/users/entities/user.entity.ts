import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
    unique: true,
  })
  firstName: string;
  @Column({
    type: 'varchar',
  })
  email: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}