import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import {
  Column,
  Entity,
  JoinColumn,
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
  @OneToOne(() => MetaOption)
  @JoinColumn()
  metaOptions?: MetaOption;
}
