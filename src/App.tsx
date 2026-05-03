/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import DoctorsPage from './pages/DoctorsPage';
import ClinicsPage from './pages/ClinicsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="diagnostics" element={<DiagnosticsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="clinics" element={<ClinicsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
