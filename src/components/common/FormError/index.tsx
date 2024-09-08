interface FormErrorProps {
  error?: string;
}

export const FormError = ({ error }: FormErrorProps) => {
  if (!error) return null;

  return <div className="mt-1 text-xs text-red-500">{error}</div>;
};
