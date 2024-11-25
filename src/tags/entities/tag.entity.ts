import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  slug: string;
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  schema?: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  imageUrl?: string;
  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToMany(() => Post, (post) => post.tags, {
    onDelete: 'CASCADE',
  })
  posts: Post[];
}
