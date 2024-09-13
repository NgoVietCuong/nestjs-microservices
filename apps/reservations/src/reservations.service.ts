import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationsRepository: ReservationsRepository) {}

  create(body: CreateReservationDto, userId: string) {
    return this.reservationsRepository.create({ ...body, timestamp: new Date(), userId });
  }

  findAll() {
    return this.reservationsRepository.find({});
  }

  findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id })
  }

  update(_id: string, body: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate({ _id }, { $set: body });
  }

  remove(id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id: id });
  }
}
