import { Check, X } from 'lucide-react';
import { Fragment } from 'react';

type Section = {
  title: string;
  rows: { label: string; solo: boolean | string; pro: boolean | string; ent: boolean | string }[];
};

const SECTIONS: Section[] = [
  {
    title: 'Général',
    rows: [
      { label: 'Utilisateurs', solo: '1', pro: '5', ent: 'Illimité' },
      { label: 'Dépôts / points de vente', solo: '1', pro: '3', ent: 'Illimité' },
      { label: 'Multi-sociétés', solo: false, pro: false, ent: true },
      { label: 'Multi-devises (GNF · USD · EUR)', solo: false, pro: true, ent: true },
      { label: 'Multilingue (FR · EN)', solo: true, pro: true, ent: true },
    ],
  },
  {
    title: 'Ventes & POS',
    rows: [
      { label: 'POS tactile rapide', solo: true, pro: true, ent: true },
      { label: 'Tickets de caisse', solo: true, pro: true, ent: true },
      { label: 'Factures conformes', solo: true, pro: true, ent: true },
      { label: 'Mobile Money (Orange · MTN)', solo: true, pro: true, ent: true },
      { label: 'Cartes de fidélité', solo: false, pro: true, ent: true },
      { label: 'Devis & bons de commande', solo: false, pro: true, ent: true },
      { label: 'Promotions & remises avancées', solo: false, pro: true, ent: true },
      { label: 'POS hors ligne (sync auto)', solo: true, pro: true, ent: true },
    ],
  },
  {
    title: 'Stock & approvisionnement',
    rows: [
      { label: 'Articles & catégories illimités', solo: true, pro: true, ent: true },
      { label: 'Code-barres & étiquettes', solo: true, pro: true, ent: true },
      { label: 'Inventaires tournants', solo: false, pro: true, ent: true },
      { label: 'Achats & bons de réception', solo: false, pro: true, ent: true },
      { label: 'Transferts inter-dépôts', solo: false, pro: true, ent: true },
      { label: 'Réapprovisionnement automatique', solo: false, pro: false, ent: true },
    ],
  },
  {
    title: 'Comptabilité OHADA',
    rows: [
      { label: 'Plan comptable SYSCOHADA', solo: false, pro: true, ent: true },
      { label: 'Écritures manuelles', solo: false, pro: true, ent: true },
      { label: 'Lettrage', solo: false, pro: true, ent: true },
      { label: 'Bilan & compte de résultat', solo: false, pro: true, ent: true },
      { label: 'Liasse fiscale (DGI Guinée)', solo: false, pro: true, ent: true },
      { label: 'TAFIRE', solo: false, pro: true, ent: true },
      { label: 'Export FEC', solo: false, pro: true, ent: true },
      { label: 'Déclaration TVA', solo: false, pro: true, ent: true },
    ],
  },
  {
    title: 'RH & Paie',
    rows: [
      { label: 'Gestion des employés', solo: false, pro: false, ent: true },
      { label: 'Contrats & avenants', solo: false, pro: false, ent: true },
      { label: 'Bulletins de paie', solo: false, pro: false, ent: true },
      { label: 'IRPP & CNSS Guinée', solo: false, pro: false, ent: true },
      { label: 'Congés & absences', solo: false, pro: false, ent: true },
    ],
  },
  {
    title: 'Sécurité & administration',
    rows: [
      { label: 'Sauvegardes locales', solo: true, pro: true, ent: true },
      { label: 'Sauvegardes cloud chiffrées', solo: false, pro: true, ent: true },
      { label: 'Authentification MFA', solo: false, pro: true, ent: true },
      { label: 'OAuth Google / Microsoft', solo: false, pro: false, ent: true },
      { label: 'Journal d’audit', solo: false, pro: true, ent: true },
      { label: 'Permissions par rôle', solo: false, pro: true, ent: true },
    ],
  },
  {
    title: 'API & intégrations',
    rows: [
      { label: 'API REST documentée', solo: false, pro: false, ent: true },
      { label: 'Webhooks', solo: false, pro: false, ent: true },
      { label: 'Connecteurs Mobile Money avancés', solo: false, pro: true, ent: true },
      { label: 'Export Excel/CSV', solo: true, pro: true, ent: true },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'Documentation en ligne', solo: true, pro: true, ent: true },
      { label: 'Support email', solo: true, pro: true, ent: true },
      { label: 'Support prioritaire', solo: false, pro: true, ent: true },
      { label: 'Account manager dédié', solo: false, pro: false, ent: true },
      { label: 'Formation sur site', solo: false, pro: false, ent: true },
    ],
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-novar-blue dark:text-novar-cyan" />;
  if (value === false) return <X className="mx-auto h-4 w-4 text-slate-300 dark:text-slate-600" />;
  return <span className="text-sm text-slate-700 dark:text-slate-300">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm min-w-[600px]">
        <thead className="bg-slate-50 dark:bg-slate-900 sticky top-0">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Fonctionnalité</th>
            <th className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">Solo</th>
            <th className="px-4 py-3 text-center font-semibold text-novar-cyan">Pro</th>
            <th className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {SECTIONS.map((section) => (
            <Fragment key={section.title}>
              <tr>
                <td colSpan={4} className="bg-slate-100/60 dark:bg-slate-900/60 px-4 py-2 font-display font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </td>
              </tr>
              {section.rows.map((row) => (
                <tr key={`${section.title}-${row.label}`} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="px-4 py-2.5 text-slate-700 dark:text-slate-300">{row.label}</td>
                  <td className="px-4 py-2.5 text-center"><Cell value={row.solo} /></td>
                  <td className="px-4 py-2.5 text-center"><Cell value={row.pro} /></td>
                  <td className="px-4 py-2.5 text-center"><Cell value={row.ent} /></td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
