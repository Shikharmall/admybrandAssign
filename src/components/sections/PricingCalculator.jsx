"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Info, Users, Database, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cardd"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PricingTier {
  id: string
  name: string
  description: string
  basePrice: number
  yearlyDiscount: number
  color: string
  popular?: boolean
  features: {
    name: string
    included: boolean
    tooltip?: string
  }[]
  limits: {
    users: number
    storage: number
    apiCalls: number
  }
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small teams getting started",
    basePrice: 29,
    yearlyDiscount: 0.2,
    color: "from-blue-500 to-blue-600",
    features: [
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "API Access", included: true },
      { name: "Custom Integrations", included: false },
      { name: "Advanced Security", included: false },
      { name: "Priority Support", included: false },
      { name: "White Label", included: false },
    ],
    limits: {
      users: 5,
      storage: 10,
      apiCalls: 1000,
    },
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses",
    basePrice: 79,
    yearlyDiscount: 0.25,
    color: "from-purple-500 to-purple-600",
    popular: true,
    features: [
      { name: "Advanced Analytics", included: true },
      { name: "Priority Email Support", included: true },
      { name: "API Access", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Advanced Security", included: true },
      { name: "Priority Support", included: false },
      { name: "White Label", included: false },
    ],
    limits: {
      users: 25,
      storage: 100,
      apiCalls: 10000,
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    basePrice: 199,
    yearlyDiscount: 0.3,
    color: "from-emerald-500 to-emerald-600",
    features: [
      { name: "Enterprise Analytics", included: true },
      { name: "24/7 Phone Support", included: true },
      { name: "Unlimited API Access", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Enterprise Security", included: true },
      { name: "Priority Support", included: true },
      { name: "White Label", included: true },
    ],
    limits: {
      users: 100,
      storage: 1000,
      apiCalls: 100000,
    },
  },
]

const addOns = [
  {
    id: "extra-users",
    name: "Additional Users",
    description: "Extra users beyond plan limit",
    pricePerUnit: 5,
    unit: "user/month",
  },
  {
    id: "extra-storage",
    name: "Additional Storage",
    description: "Extra storage beyond plan limit",
    pricePerUnit: 2,
    unit: "GB/month",
  },
  {
    id: "premium-support",
    name: "Premium Support",
    description: "24/7 priority support with dedicated account manager",
    pricePerUnit: 99,
    unit: "month",
  },
]

export default function Component() {
  const [selectedTier, setSelectedTier] = useState("professional")
  const [isYearly, setIsYearly] = useState(false)
  const [customUsers, setCustomUsers] = useState([10])
  const [customStorage, setCustomStorage] = useState([50])
  const [enabledAddOns, setEnabledAddOns] = useState<Record<string, boolean>>({})
  const [addOnQuantities, setAddOnQuantities] = useState<Record<string, number>>({
    "extra-users": 0,
    "extra-storage": 0,
    "premium-support": 1,
  })

  const selectedPlan = pricingTiers.find((tier) => tier.id === selectedTier)!

  const calculatePrice = () => {
    let basePrice = selectedPlan.basePrice

    // Apply yearly discount
    if (isYearly) {
      basePrice = basePrice * (1 - selectedPlan.yearlyDiscount)
    }

    // Calculate usage overages
    let extraUsersCost = 0
    let extraStorageCost = 0

    if (customUsers[0] > selectedPlan.limits.users) {
      extraUsersCost = (customUsers[0] - selectedPlan.limits.users) * 5
    }

    if (customStorage[0] > selectedPlan.limits.storage) {
      extraStorageCost = (customStorage[0] - selectedPlan.limits.storage) * 2
    }

    // Calculate add-ons
    let addOnsCost = 0
    Object.entries(enabledAddOns).forEach(([addOnId, enabled]) => {
      if (enabled) {
        const addOn = addOns.find((a) => a.id === addOnId)
        if (addOn) {
          addOnsCost += addOn.pricePerUnit * (addOnQuantities[addOnId] || 1)
        }
      }
    })

    const monthlyTotal = basePrice + extraUsersCost + extraStorageCost + addOnsCost
    return {
      monthly: monthlyTotal,
      yearly: monthlyTotal * 12,
      savings: isYearly ? selectedPlan.basePrice * 12 * selectedPlan.yearlyDiscount : 0,
      breakdown: {
        base: basePrice,
        extraUsers: extraUsersCost,
        extraStorage: extraStorageCost,
        addOns: addOnsCost,
      },
    }
  }

  const pricing = calculatePrice()

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              Choose Your Perfect Plan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Flexible pricing that scales with your business
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className={`text-sm ${!isYearly ? "font-semibold" : "text-muted-foreground"}`}>Monthly</span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} />
              <span className={`text-sm ${isYearly ? "font-semibold" : "text-muted-foreground"}`}>Yearly</span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2">
                  Save up to 30%
                </Badge>
              )}
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Plan Selection */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card
                      className={`relative cursor-pointer transition-all duration-300 ${
                        selectedTier === tier.id ? "ring-2 ring-purple-500 shadow-lg scale-105" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="text-center">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${tier.color} mx-auto mb-4 flex items-center justify-center`}
                        >
                          <span className="text-white font-bold text-lg">{tier.name.charAt(0)}</span>
                        </div>
                        <CardTitle className="text-xl">{tier.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">
                            ${Math.round(tier.basePrice * (isYearly ? 1 - tier.yearlyDiscount : 1))}
                          </span>
                          <span className="text-muted-foreground">/{isYearly ? "month (billed yearly)" : "month"}</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          {tier.features.map((feature) => (
                            <div key={feature.name} className="flex items-center gap-2">
                              {feature.included ? (
                                <Check className="w-4 h-4 text-green-500" />
                              ) : (
                                <X className="w-4 h-4 text-muted-foreground" />
                              )}
                              <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                                {feature.name}
                              </span>
                              {feature.tooltip && (
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Info className="w-3 h-3 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{feature.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Usage Customization */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Customize Your Usage
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Users Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Number of Users
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {customUsers[0]} users
                          {customUsers[0] > selectedPlan.limits.users && (
                            <span className="text-orange-600 ml-1">
                              (+{customUsers[0] - selectedPlan.limits.users} extra)
                            </span>
                          )}
                        </span>
                      </div>
                      <Slider
                        value={customUsers}
                        onValueChange={setCustomUsers}
                        max={200}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1</span>
                        <span>Plan includes {selectedPlan.limits.users}</span>
                        <span>200</span>
                      </div>
                    </div>

                    {/* Storage Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Database className="w-4 h-4" />
                          Storage (GB)
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {customStorage[0]} GB
                          {customStorage[0] > selectedPlan.limits.storage && (
                            <span className="text-orange-600 ml-1">
                              (+{customStorage[0] - selectedPlan.limits.storage} extra)
                            </span>
                          )}
                        </span>
                      </div>
                      <Slider
                        value={customStorage}
                        onValueChange={setCustomStorage}
                        max={2000}
                        min={1}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1 GB</span>
                        <span>Plan includes {selectedPlan.limits.storage} GB</span>
                        <span>2000 GB</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Add-ons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Optional Add-ons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {addOns.map((addOn) => (
                      <div key={addOn.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={enabledAddOns[addOn.id] || false}
                            onCheckedChange={(checked) =>
                              setEnabledAddOns((prev) => ({ ...prev, [addOn.id]: checked }))
                            }
                          />
                          <div>
                            <h4 className="font-medium">{addOn.name}</h4>
                            <p className="text-sm text-muted-foreground">{addOn.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">${addOn.pricePerUnit}</span>
                          <span className="text-sm text-muted-foreground">/{addOn.unit}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Price Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Price Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Plan</span>
                        <span>${pricing.breakdown.base.toFixed(2)}</span>
                      </div>

                      {pricing.breakdown.extraUsers > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Extra Users</span>
                          <span>${pricing.breakdown.extraUsers.toFixed(2)}</span>
                        </div>
                      )}

                      {pricing.breakdown.extraStorage > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Extra Storage</span>
                          <span>${pricing.breakdown.extraStorage.toFixed(2)}</span>
                        </div>
                      )}

                      {pricing.breakdown.addOns > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Add-ons</span>
                          <span>${pricing.breakdown.addOns.toFixed(2)}</span>
                        </div>
                      )}
                    </div>

                    <hr />

                    <div className="space-y-2">
                      <div className="flex justify-between font-semibold">
                        <span>Monthly Total</span>
                        <span>${pricing.monthly.toFixed(2)}</span>
                      </div>

                      {isYearly && (
                        <>
                          <div className="flex justify-between">
                            <span>Yearly Total</span>
                            <span>${pricing.yearly.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-green-600 text-sm">
                            <span>Yearly Savings</span>
                            <span>-${pricing.savings.toFixed(2)}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <Button className="w-full" size="lg">
                      Start Free Trial
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      No credit card required. Cancel anytime.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
