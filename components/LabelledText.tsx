interface LabelledTextProps {
  label: string;
  textValue: string;
}

const LabelledText = ({ label, textValue }: LabelledTextProps) => (
  <p className="text-center">
    <span className="font-semibold">{label}:&nbsp;</span>
    <span>{textValue}</span>
  </p>
);

export default LabelledText;
