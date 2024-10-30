import { User, Star, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AccountOverview = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">Premium Member</Badge>
                <Badge className="bg-yellow-500">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Gold Status
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Reward Points</p>
              <p className="text-2xl font-bold">2,450</p>
            </div>
            <Button variant="outline" className="w-full md:w-auto" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Account Info
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountOverview;