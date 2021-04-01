import { 
    Body,
    Controller,
    Get,
    Param,
    Post,
    Patch,
    Delete,
    Query
} from '@nestjs/common';
import { response } from 'express';
import { identity } from 'rxjs';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}
    @Get()
    findAll(@Query() paginationQuery)  {
        // const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        console.log(typeof id);
        return this.coffeeService.findOne('' + id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(CreateCoffeeDto);
        //return this action creates a coffee.
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, UpdateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Body() body) {
        return this.coffeeService.remove(id);
    }
}