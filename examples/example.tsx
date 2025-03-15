import React, { useState, useEffect } from 'react';

enum STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

type Props = {
  title: string;
  onSubmit: (data: FormData) => Promise<void>;
};

interface FormData {
  name: string;
  email: string;
}

const ExampleForm: React.FC<Props> = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      const timer = setTimeout(() => {
        setStatus(STATUS.IDLE);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);
    setError(null);

    try {
      await onSubmit(formData);
      setStatus(STATUS.SUCCESS);
    } catch (err) {
      setStatus(STATUS.ERROR);
      setError('Произошла ошибка при отправке формы');
    }
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={status === STATUS.LOADING}>
          {status === STATUS.LOADING ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
      {status === STATUS.SUCCESS && (
        <div className="success-message">Форма успешно отправлена!</div>
      )}
      {status === STATUS.ERROR && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ExampleForm; 