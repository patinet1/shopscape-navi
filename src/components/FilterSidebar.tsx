import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const FilterSidebar = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Filters</h3>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="category">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="electronics" />
                  <label htmlFor="electronics">Electronics</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="clothing" />
                  <label htmlFor="clothing">Clothing</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="accessories" />
                  <label htmlFor="accessories">Accessories</label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={1}
                  className="my-6"
                />
                <div className="flex justify-between text-sm">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand">
            <AccordionTrigger>Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="brand1" />
                  <label htmlFor="brand1">Brand 1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="brand2" />
                  <label htmlFor="brand2">Brand 2</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="brand3" />
                  <label htmlFor="brand3">Brand 3</label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rating">
            <AccordionTrigger>Customer Rating</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="4stars" />
                  <label htmlFor="4stars">4★ & above</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="3stars" />
                  <label htmlFor="3stars">3★ & above</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="2stars" />
                  <label htmlFor="2stars">2★ & above</label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterSidebar;