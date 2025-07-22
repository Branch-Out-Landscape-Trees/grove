import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, TreePine, Scissors, Shovel, Truck, Star, CheckCircle, Clock } from "lucide-react"
import ThemeToggle from "../theme/ThemeToggle"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-green-800 dark:bg-green-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TreePine className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Branch Out Landscape & Trees</h1>
                <p className="text-green-200 dark:text-green-300 text-sm">BOLT</p>
              </div>
            </div>
            {/* <nav className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-green-200 dark:hover:text-green-300 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-green-200 dark:hover:text-green-300 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-green-200 dark:hover:text-green-300 transition-colors">
                Contact
              </a>
            </nav> */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
              >
                <a href="tel:2544242553" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">(254) 424-2553</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 py-20 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-green-900 dark:text-green-100 leading-tight transition-colors">
                Professional Tree & Landscape Services
              </h2>
              <p className="text-xl text-green-700 dark:text-green-300 transition-colors">
                Transform your outdoor space with BOLT's expert tree care, landscaping, and maintenance services. We
                bring years of experience and passion to every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white text-lg px-8 py-4"
                >
                  <a href="tel:2544242553" className="flex items-center justify-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <span>Call Now to Get a Free Quote</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://canopy.boltscape.com/images/bolt-banner.png"
                alt="BOLT - Branch Out Landscape & Trees"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-900 dark:text-green-100 mb-4 transition-colors">
              Our Services
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              From tree removal to complete landscape design, we offer comprehensive outdoor services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg dark:hover:shadow-green-500/10 transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <TreePine className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2 transition-colors">
                  Tree Services
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Tree removal, trimming, pruning, and emergency tree services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg dark:hover:shadow-green-500/10 transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <Scissors className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2 transition-colors">
                  Landscaping
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Complete landscape design, installation, and maintenance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg dark:hover:shadow-green-500/10 transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <Shovel className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2 transition-colors">
                  Lawn Care
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Regular mowing, fertilization, and lawn maintenance services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg dark:hover:shadow-green-500/10 transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2 transition-colors">
                  Cleanup Services
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Debris removal, storm cleanup, and property maintenance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-green-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://canopy.boltscape.com/images/zach-in-tractor.png"
                alt="BOLT team member operating professional tree service equipment with specialized tractor and bucket lift"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-green-900 dark:text-green-100 transition-colors">
                Why Choose BOLT?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors">
                With years of experience in the landscaping and tree service industry, we're committed to delivering
                exceptional results for every client.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 transition-colors">
                      Competitive Pricing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      Fair, transparent pricing with no hidden fees or surprises
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 transition-colors">
                      Licensed & Insured
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      Fully licensed and insured for your peace of mind
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 transition-colors">Expert Team</h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      Experienced professionals with specialized equipment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 transition-colors">
                      Free Estimates
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      No-obligation quotes for all services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 transition-colors">
                      Emergency Services
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      24/7 emergency tree removal and storm cleanup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-900 dark:text-green-100 mb-4 transition-colors">
              What Our Customers Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
                "BOLT did an amazing job removing a large oak tree from our backyard. Professional, efficient, and
                cleaned up everything perfectly."
              </p>
              <p className="font-semibold text-green-900 dark:text-green-100 transition-colors">- Sarah M.</p>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
                "Their landscaping work transformed our front yard completely. Highly recommend for anyone looking for
                quality work."
              </p>
              <p className="font-semibold text-green-900 dark:text-green-100 transition-colors">- Mike R.</p>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
                "Fast response for emergency tree removal after the storm. Great communication and fair pricing."
              </p>
              <p className="font-semibold text-green-900 dark:text-green-100 transition-colors">- Jennifer L.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-800 dark:bg-green-900 text-white transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Get Your Free Quote Today</h3>
            <p className="text-xl text-green-200 dark:text-green-300 transition-colors">
              Ready to transform your outdoor space? Contact us for a free consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information Card */}
              <Card className="bg-green-700/20 dark:bg-green-800/20 border-green-600/30 dark:border-green-700/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <Mail className="h-6 w-6 mr-3 text-green-300" />
                    Contact Information
                  </h4>
                  <div className="space-y-6">
                    <a
                      href="tel:2544242553"
                      className="flex items-center space-x-4 p-4 bg-green-700/30 dark:bg-green-800/30 rounded-lg hover:bg-green-700/40 dark:hover:bg-green-800/40 transition-colors cursor-pointer block"
                    >
                      <div className="flex-shrink-0">
                        <Phone className="h-8 w-8 text-green-300 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">Phone</p>
                        <span className="text-green-200 dark:text-green-300 hover:text-white transition-colors text-lg font-medium">
                          (254) 424-2553
                        </span>
                      </div>
                    </a>

                    <a
                      href="mailto:zach@boltscape.com"
                      className="flex items-center space-x-4 p-4 bg-green-700/30 dark:bg-green-800/30 rounded-lg hover:bg-green-700/40 dark:hover:bg-green-800/40 transition-colors cursor-pointer block"
                    >
                      <div className="flex-shrink-0">
                        <Mail className="h-8 w-8 text-green-300 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">Email</p>
                        <span className="text-green-200 dark:text-green-300 hover:text-white transition-colors text-lg font-medium">
                          zach@boltscape.com
                        </span>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours Card */}
              <Card className="bg-green-700/20 dark:bg-green-800/20 border-green-600/30 dark:border-green-700/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-green-300" />
                    Business Hours
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-700/30 dark:bg-green-800/30 rounded-lg">
                      <span className="font-semibold text-white">Monday - Friday</span>
                      <span className="text-green-200 dark:text-green-300">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-700/30 dark:bg-green-800/30 rounded-lg">
                      <span className="font-semibold text-white">Saturday</span>
                      <span className="text-green-200 dark:text-green-300">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-700/30 dark:bg-green-800/30 rounded-lg">
                      <span className="font-semibold text-white">Sunday</span>
                      <span className="text-green-200 dark:text-green-300">Emergency Services Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 dark:bg-gray-950 text-white py-8 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <TreePine className="h-6 w-6" />
              <div>
                <p className="font-semibold">Branch Out Landscape & Trees</p>
                <p className="text-green-300 dark:text-green-400 text-sm transition-colors">
                  Professional Tree & Landscape Services
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-green-300 dark:text-green-400 text-sm transition-colors">
                Website developed by{" "}
                <a
                  href="https://geelinsky.com"
                  className="text-white hover:text-green-200 dark:hover:text-green-300 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garrett Polinsky
                </a>
              </p>
              <p className="text-green-400 dark:text-green-500 text-xs mt-1 transition-colors">
                © {new Date().getFullYear()} Branch Out Landscape & Trees. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
