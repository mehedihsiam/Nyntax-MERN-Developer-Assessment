import Joi from "joi";

const generateInvoiceJoiSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  pickupDate: Joi.string().required(),
  returnDate: Joi.string().required(),
  carId: Joi.string().required(),
  reservationCode: Joi.string().required(),
  rentForHours: Joi.number().required(),
});

export default generateInvoiceJoiSchema;
