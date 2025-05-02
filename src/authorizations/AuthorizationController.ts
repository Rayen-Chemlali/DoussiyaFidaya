// authorization.controller.ts
import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';

import { Authorization } from './entities/authorization.entity';
import { CreateAuthorizationInput } from './dto/create-authorization.input';
import { UpdateAuthorizationInput } from './dto/update-authorization.input';
 
// @UseGuards(JwtAuthGuard)
@Controller('authorizations')
export class AuthorizationController {
  constructor(private readonly service: AuthorizationsService) {}
  readonly user = { id: '1' }; // Mock user for demonstration purposes
  

  @Post()
  async create(@Body() dto: CreateAuthorizationInput , /*@User() user*/): Promise<Authorization> {
    
    return this.service.create(this.user.id,dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateAuthorizationInput,
    /*@User() user*/
  ): Promise<Authorization | null> {
    return this.service.update(id, dto , this.user.id);
  }

  @Delete(':id')
  async delete(@Param('id',/*@User() user*/) id: string): Promise<void> {
    return this.service.delete(id , this.user.id);
  }
}
