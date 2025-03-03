import { Module } from '@nestjs/common';
import { Pool } from 'pg'
//postgresql://postgres:[YOUR-PASSWORD]@db.cswvoyjdjkypswdbrurj.supabase.co:5432/postgres
@Module({
    providers: [
        {
            provide: 'BASKET_INTERMEDIA_V2_POOL',
            useFactory: () => {
                try {
                    const pool = new Pool({
                        connectionString: process.env.DB_BASKET_INTERMEDIA_V2_CONNECTION_STRING
                    })
                    return pool
                } catch (error) {
                    console.log(error)
                }
            },
        },
    ],
    exports: ['BASKET_INTERMEDIA_V2_POOL'],

})
export class DatabaseModule {

}
