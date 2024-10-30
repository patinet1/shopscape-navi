import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  colors: string[];
  sizes: string[];
  selectedColor: string;
  selectedSize: string;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
}

const ProductOptions = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: Props) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Color</Label>
        <RadioGroup
          value={selectedColor}
          onValueChange={onColorChange}
          className="flex gap-2"
        >
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <RadioGroupItem value={color} id={`color-${color}`} />
              <Label htmlFor={`color-${color}`}>{color}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Size</Label>
        <RadioGroup
          value={selectedSize}
          onValueChange={onSizeChange}
          className="flex gap-2"
        >
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <RadioGroupItem value={size} id={`size-${size}`} />
              <Label htmlFor={`size-${size}`}>{size}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default ProductOptions;