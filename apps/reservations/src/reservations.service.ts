import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';
import { PAYMENTS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentsService: ClientProxy,
  ) {}

  async create(body: CreateReservationDto, userId: string) {
    this.paymentsService.send('create_charge', body.charge).subscribe(async (response) => {
      console.log("response", response);
      const reservation = this.reservationsRepository.create({ ...body, timestamp: new Date(), userId });
    });
  }

  async findAll() {
    return this.reservationsRepository.find({});
  }

  async findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  async update(_id: string, body: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate({ _id }, { $set: body });
  }

  async remove(id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id: id });
  }
}
