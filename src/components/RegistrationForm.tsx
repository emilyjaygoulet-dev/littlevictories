
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface RegistrationData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface RegistrationFormProps {
  onComplete: (data: RegistrationData) => void;
  onBack: () => void;
}

export const RegistrationForm = ({ onComplete, onBack }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<RegistrationData>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });
  const [errors, setErrors] = useState<Partial<RegistrationData>>({});
  const { toast } = useToast();

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
  };

  const validateForm = () => {
    const newErrors: Partial<RegistrationData> = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    
    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be 8+ characters with uppercase, lowercase, number, and special character";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Registration successful! 🎉",
        description: "Two-factor authentication code sent to your phone",
      });
      onComplete(formData);
    }
  };

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="p-8 bg-white/95 backdrop-blur-sm border-white/50 shadow-2xl max-w-md mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-aref-ruqaa font-bold text-gray-800">
          Create Your Account
        </h2>
        <p className="text-lg font-arima text-gray-700">
          Join the victory celebration
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="font-arima text-gray-700">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="bg-white/80 border-gray-400"
              />
              {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className="font-arima text-gray-700">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="bg-white/80 border-gray-400"
              />
              {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="username" className="font-arima text-gray-700">Username</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="bg-white/80 border-gray-400"
            />
            {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="font-arima text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-white/80 border-gray-400"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="font-arima text-gray-700">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="bg-white/80 border-gray-400"
            />
            {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          <div>
            <Label htmlFor="password" className="font-arima text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="bg-white/80 border-gray-400"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6">
            <Button
              type="button"
              onClick={onBack}
              className="bg-blue-600 hover:bg-blue-700 text-white font-aref-ruqaa px-8 shadow-lg"
            >
              Back
            </Button>
            
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-aref-ruqaa px-8 shadow-lg"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
