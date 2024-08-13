import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertiesRepository: Repository<Property>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const property = this.propertiesRepository.create(createPropertyDto);
    return await this.propertiesRepository.save(property);
  }

  async findAll(): Promise<Property[]> {
    return await this.propertiesRepository.find();
  }

  async findOne(id: number): Promise<Property> {
    return await this.propertiesRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePropertyDto: Partial<CreatePropertyDto>,
  ): Promise<Property> {
    await this.propertiesRepository.update(id, updatePropertyDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.propertiesRepository.delete(id);
  }
}
