import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from './property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  async create(
    @Body() createPropertyDto: CreatePropertyDto,
  ): Promise<Property> {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Success' })
  async findAll(): Promise<Property[]> {
    return this.propertiesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Success' })
  async findOne(@Param('id') id: number): Promise<Property> {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Success' })
  async update(
    @Param('id') id: number,
    @Body() updatePropertyDto: Partial<CreatePropertyDto>,
  ): Promise<Property> {
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Success' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.propertiesService.remove(id);
  }
}
