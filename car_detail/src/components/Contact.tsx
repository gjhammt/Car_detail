import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              {...register('name')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              {...register('message')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary h-32"
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;