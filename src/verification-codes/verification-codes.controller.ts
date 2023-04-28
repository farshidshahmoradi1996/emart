import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VerificationCodesService } from './verification-codes.service';
import { CreateVerificationCodeDto } from './dto/create-verification-code.dto';
import { UpdateVerificationCodeDto } from './dto/update-verification-code.dto';

@Controller('verification-codes')
export class VerificationCodesController {
  constructor(private readonly verificationCodesService: VerificationCodesService) {}

  @Post()
  create(@Body() createVerificationCodeDto: CreateVerificationCodeDto) {
    return this.verificationCodesService.create(createVerificationCodeDto);
  }

  @Get()
  findAll() {
    return this.verificationCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verificationCodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVerificationCodeDto: UpdateVerificationCodeDto) {
    return this.verificationCodesService.update(+id, updateVerificationCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verificationCodesService.remove(+id);
  }
}
