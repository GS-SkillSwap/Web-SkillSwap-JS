import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function SearchBar({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  filterOptions,
}) {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value) => {
    onSearchChange(value);
  };

  const handleFilterChange = (filterType, value) => {
    onFiltersChange({
      ...filters,
      [filterType]: value,
    });
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    filters.area !== "" ||
    filters.localizacao !== "" ||
    filters.tecnologia !== "";

  const clearAllFilters = () => {
    onSearchChange("");
    onFiltersChange({
      area: "",
      localizacao: "",
      tecnologia: "",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col gap-4">
        {/* search input */}
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar profissionais por nome, cargo ou área..."
            value={searchQuery}
            onChange={(event) => handleSearchChange(event.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* filter toggle button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            >
              Limpar Filtros
            </button>
          )}
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Area Filter */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Área
              </label>
              <select
                value={filters.area}
                onChange={(e) => handleFilterChange("area", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Todas as áreas</option>
                {filterOptions.areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Localização
              </label>
              <select
                value={filters.localizacao}
                onChange={(e) =>
                  handleFilterChange("localizacao", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Todas as cidades</option>
                {filterOptions.localizacoes.map((localizacao) => (
                  <option key={localizacao} value={localizacao}>
                    {localizacao}
                  </option>
                ))}
              </select>
            </div>

            {/* Skill Filter */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Tecnologias
              </label>
              <select
                value={filters.tecnologia}
                onChange={(e) =>
                  handleFilterChange("tecnologia", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Todas as tecnologias</option>
                {filterOptions.tecnologias.map((tecnologia) => (
                  <option key={tecnologia} value={tecnologia}>
                    {tecnologia}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
