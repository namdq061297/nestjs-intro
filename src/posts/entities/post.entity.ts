import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postStatus, postType } from '../enum/post.enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  title: string;
  @Column({
    type: 'enum',
    nullable: false,
    enum: postType,
    default: postType.PAGE,
  })
  postType: postType;
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  slug: string;
  @Column({
    type: 'enum',
    nullable: false,
    enum: postStatus,
    default: postStatus.DRAFT,
  })
  status: postStatus;
  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  schema?: string;
  @Column({
    type: 'varchar',
    nullable: true,
  })
  imageUrl?: string;
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishDate?: Date;
  @OneToOne(() => MetaOption, (meta) => meta.post, {
    cascade: true,
    eager: true,
  })
  // @JoinColumn()
  metaOptions?: MetaOption;
  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author: User;
  @ManyToMany(() => Tag, (tag) => tag.posts, {
    eager: true,
  })
  @JoinTable()
  tags?: Tag[];
}
