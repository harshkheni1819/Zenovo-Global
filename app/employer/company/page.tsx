import {
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
} from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="rounded-2xl bg-white p-8 shadow">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-100">
              <Building2 className="h-12 w-12 text-blue-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Zenovo Global
              </h1>

              <p className="mt-2 text-gray-500">
                AI Powered Recruitment & IT Solutions Company
              </p>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-6 text-xl font-semibold">
              Company Details
            </h2>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Globe className="text-blue-600" />
                <span>www.zenovoglobal.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>info@zenovoglobal.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-6 text-xl font-semibold">
              Company Statistics
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-5 text-center">
                <Users className="mx-auto mb-2 text-blue-600" />
                <h3 className="text-2xl font-bold">150+</h3>
                <p className="text-gray-600">Employees</p>
              </div>

              <div className="rounded-xl bg-green-50 p-5 text-center">
                <Building2 className="mx-auto mb-2 text-green-600" />
                <h3 className="text-2xl font-bold">80+</h3>
                <p className="text-gray-600">Open Jobs</p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-5 text-center">
                <Users className="mx-auto mb-2 text-yellow-600" />
                <h3 className="text-2xl font-bold">1200+</h3>
                <p className="text-gray-600">Candidates</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-5 text-center">
                <Building2 className="mx-auto mb-2 text-purple-600" />
                <h3 className="text-2xl font-bold">25</h3>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            About Company
          </h2>

          <p className="leading-8 text-gray-600">
            Zenovo Global is a modern AI-powered recruitment platform that
            connects talented professionals with leading employers across
            multiple industries. We provide innovative hiring solutions,
            workforce management, and global recruitment services.
          </p>
        </div>
      </div>
    </div>
  );
}