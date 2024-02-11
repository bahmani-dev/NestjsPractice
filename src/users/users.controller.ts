import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
/* 

*/

    @Get() // get users
    findAll(){
        return []
    }


    @Get('interns') // GET /users/interns
    findAllInterns() {
        return []
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id:String){
        return {id}
    }

  

}
