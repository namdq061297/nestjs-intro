import { Test, TestingModule } from '@nestjs/testing';
import { MetaOptionsController } from './meta-options.controller';
import { MetaOptionsService } from './providers/meta-options.service';

describe('MetaOptionsController', () => {
  let controller: MetaOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaOptionsController],
      providers: [MetaOptionsService],
    }).compile();

    controller = module.get<MetaOptionsController>(MetaOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
