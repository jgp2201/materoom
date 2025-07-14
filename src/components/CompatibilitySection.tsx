import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Coffee, 
  Moon, 
  Music, 
  Utensils, 
  Users,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const CompatibilitySection = () => {
  const compatibilityFactors = [
    { icon: Moon, label: "Sleep Schedule", match: 92, description: "Both night owls" },
    { icon: Utensils, label: "Food Preferences", match: 87, description: "Vegetarian friendly" },
    { icon: Music, label: "Noise Tolerance", match: 89, description: "Moderate music okay" },
    { icon: Coffee, label: "Social Level", match: 94, description: "Semi-social types" },
  ];

  const lifestylePreferences = [
    "Night owl (sleeps after 12 AM)",
    "Vegetarian",
    "Moderate social gatherings",
    "Clean and organized",
    "Non-smoker",
    "Pet-friendly",
  ];

  return (
    <section id="compatibility" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI-Powered
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Compatibility Matching
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intelligent system analyzes lifestyle patterns to find roommates who complement your living style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Compatibility Demo */}
          <div className="space-y-6">
            <Card className="bg-gradient-subtle border-border/50 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">You & Rahul</CardTitle>
                      <CardDescription>Compatibility Analysis</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                      89%
                    </div>
                    <div className="text-sm text-muted-foreground">Match Score</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {compatibilityFactors.map((factor, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <factor.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{factor.label}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{factor.match}%</span>
                    </div>
                    <Progress value={factor.match} className="h-2" />
                    <p className="text-xs text-muted-foreground">{factor.description}</p>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-700">High Compatibility Prediction</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on lifestyle analysis, you and Rahul have excellent roommate potential with shared preferences for quiet living and similar schedules.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lifestyle Preferences */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Your Lifestyle Profile
              </h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your preferences and habits. Our AI will find roommates with compatible lifestyles.
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-accent" />
                  <span>Current Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {lifestylePreferences.map((preference, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{preference}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button variant="default" size="lg" className="w-full">
                Take Compatibility Quiz
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Update Preferences
              </Button>
            </div>

            <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Smart Matching Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI considers 50+ lifestyle factors including sleep patterns, cleanliness habits, social preferences, and more to ensure perfect roommate matches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;